import re

def markdown_to_int(markdown):
    """
    Convert markdown numbers to integers.
    
    Args:
    markdown (str): A string containing markdown numbers.
    
    Returns:
    int: The integer representation of the markdown number.
    """
    # Extract the number from the markdown string
    match = re.search(r'\d+', markdown)
    if match:
        return int(match.group())
    else:
        raise ValueError("No valid number found in the markdown string")

# Example usage
markdown_string = "### 123"
print(markdown_to_int(markdown_string))  # Output: 123