import pandas as pd

def rule_8b(holdings_df):
    holdings_df = holdings_df.copy()  # Avoid modifying the original DataFrame
    
    # Mark eligibility based on the conditions
    holdings_df["rule_8b_eligible_ind"] = (
        (holdings_df['delete_ind'] == 0) &
        (holdings_df['det_px_chk_8_ind'] == 1) &
        (holdings_df['total_cal_amt'] > 50000000) &
        (holdings_df['ttl_holding_cnt'] > 10)
    )
    
    # Apply Rule 8b logic
    holdings_df["px_match_8_ind"] = holdings_df.apply(
        lambda row: 1 if (row['rule_8b_eligible_ind'] and 
                          row['share_amt'] / row['total_cal_amt'] > 0.25) else 0, axis=1
    )
    
    return holdings_df