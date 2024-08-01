import pandas as pd
from pandas.testing import assert_frame_equal
import pytest

from rule_8b import rule_8b

class TestRule8b:
    @pytest.fixture
    def setup(self):
        self.input_df = pd.read_csv("test_rule_8b_input.csv")
        self.expected_output_df = pd.read_csv("test_rule_8b_expected_output.csv")
    
    def test_rule_8b(self, setup):
        result_df = rule_8b(self.input_df)
        try:
            assert_frame_equal(result_df, self.expected_output_df)
        except AssertionError as e:
            print("\nResult DataFrame:\n", result_df)
            print("\nExpected DataFrame:\n", self.expected_output_df)
            raise e

if __name__ == '__main__':
    pytest.main()
