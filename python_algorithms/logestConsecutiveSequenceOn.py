def longestConsecutive(nums):
    num_set = set()
    for num in nums:
        num_set.add(num)

    max_seq_length = 0
    for i in range(0, len(nums)):
        current_num = nums[i]
        current_sequence_length = 1
        
        if(current_num - 1 not in num_set):
            while current_num + 1 in nums:
                current_num += 1
                current_sequence_length += 1
        max_seq_length = max(max_seq_length, current_sequence_length)
    return max_seq_length


arr = [1,200,300,201,3,203,4,2,203]
print(longestConsecutive(arr))