from flask import Flask, request, jsonify
import pyodbc
import logging
import time

app = Flask(__name__)


logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(levelname)s - %(message)s',
                    handlers=[logging.StreamHandler(), 
                              logging.FileHandler("app.log")])

logger = logging.getLogger()


conn = pyodbc.connect('DRIVER={SQL Server};SERVER=127.0.0.1,14334;DATABASE=OrionExt;UID=ylikhitha;PWD=Pass@2024')
logger.info("Connection successful")
cursor = conn.cursor()

@app.route('/get_quotes', methods=['GET'])
def get_quotes():
    start_time = time.time() 
    
    h_quote_id = request.args.get('id')
    from_date = request.args.get('fromdate')
    to_date = request.args.get('todate')
    client_ip = request.remote_addr
    
    logger.info(f"Request received from {client_ip} for quotes with id: {h_quote_id}, fromdate: {from_date}, todate: {to_date}")

    if not h_quote_id:
        logger.warning(f"Client {client_ip} failed to provide id")
        return jsonify({'error': 'id is required'}), 400
    
    try:
        sql_query = "SELECT top 3000 h_quote_id, cob_dt, close_px FROM tbl_sec_t_quote_price WHERE h_quote_id = ?"
        params = [h_quote_id]

        if from_date and to_date:
            sql_query += " AND cob_dt BETWEEN ? AND ?"
            params.extend([from_date, to_date])

        logger.info(f"Executing SQL query: {sql_query} with params: {params} for client {client_ip}")
        
        cursor.execute(sql_query, params)
        rows = cursor.fetchall()

        if not rows:
            logger.info(f"No records found for id: {h_quote_id} requested by client {client_ip}")
            return jsonify({'message': 'id not found'}), 404

        result = []
        for row in rows:
            columns = [column[0] for column in cursor.description]
            result.append(dict(zip(columns, row)))

        logger.info(f"Returning {len(rows)} records to client {client_ip}")
        
        end_time = time.time()  
        time_taken = end_time - start_time
        logger.info(f"API call took {time_taken:.4f} seconds")

        return jsonify(result)

    except Exception as e:
        logger.error(f"Error occurred for client {client_ip}: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.errorhandler(404)
def page_not_found(e):
    client_ip = request.remote_addr
    logger.error(f"Error [404] for client {client_ip}: Endpoint - {request.path}, error: {str(e)}")
    return {"Error Code": 404, "Response": "endpoint not found"}

@app.errorhandler(400)
def bad_request(e):
    client_ip = request.remote_addr
    logger.error(f"Error [400] for client {client_ip}: Endpoint - {request.path}, error: {str(e)}")
    return {"Error Code": 400, "Response": f"Bad request {str(e)}"}

@app.errorhandler(504)
def request_timeout(e):
    client_ip = request.remote_addr
    logger.error(f"Error [504] for client {client_ip}: Endpoint - {request.path}, error: {str(e)}")
    return {"Error Code": 504, "Response": f"Request timed out {str(e)}"}

@app.route('/healthcheck', methods=['GET'])
def access_healthcheck(): 
    return "You have reached health check page"

if __name__ == '__main__':
    app.run(debug=True)
