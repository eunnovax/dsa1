def longestConsecutive(nums):
    max_seq_length = 0
    for i in range(0, len(nums)):
        current_num = nums[i]
        current_sequence_length = 1

        while numberExists(nums, current_num + 1):
            current_num += 1
            current_sequence_length += 1
        max_seq_length = max(max_seq_length, current_sequence_length)
    return max_seq_length

def numberExists(arr, num):
    for i in range(0, len(arr)):
        if(arr[i] == num):
            return True
    return False

arr = [1,200,300,201,3,203,4,2,203]
print(longestConsecutive(arr))