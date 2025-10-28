import random

def countingSort(A):
    M = A[0]
    m = A[0]
    for i in range(1,len(A)):
        if M < A[i]:
            M = A[i]
        if m > A[i]:
            m = A[i]
            
    B = [0]*(M-m+1)

    for a in A:
        B[a - m] = B[a - m] + 1

    j = 0
    for i in range(M-m + 1):
        while B[i] > 0:
            A[j] = i + m
            B[i] = B[i] - 1
            j = j + 1

for k in range(10):            
    x = []
    for i in range(10):
        x.append(random.randint(-10, 10))
    print("\nTest {}".format(k+1))
    print(x)
    countingSort(x)
    print(x)