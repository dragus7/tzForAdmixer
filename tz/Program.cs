int test(int color, int[] count)
{
    int resColorCount = 0;
    int[] colorCountArr = new int[2];
    for(int i = 0, j = 0; i < 3; i++)
    {
        if (i == color)
        {
            resColorCount = count[i];
        }
        else
        {
            colorCountArr[j] = count[i];
            j++;
        }
    }

    int diff = Math.Abs(colorCountArr[0] - colorCountArr[1]); 

    if(diff == 0)
    {
        return colorCountArr[0];
    }else if(diff % 3 == 0)
    {
        int res = diff / 3;
        if (res - resColorCount < 0) return -1;

        if (colorCountArr[0] > colorCountArr[1])
        {
            return ((res * 2) + colorCountArr[1]) + res;
        }
        else
        {
            return ((res * 2) + colorCountArr[0]) + res;
        }
    }
    else
    {
        return -1;
    }
}


Console.WriteLine(test(2, new int[] { 2, 2, 0 })); 
Console.WriteLine(test(1, new int[] { 2, 0, 2 })); 
Console.WriteLine(test(2, new int[] { 3, 3, 0 })); 
Console.WriteLine(test(0, new int[] { 4, 2, 2 }));


Console.WriteLine(test(0, new int[] { 9, 0, 0 })); 
Console.WriteLine(test(1, new int[] { 0, 9, 0 }));
Console.WriteLine(test(2, new int[] { 5, 0, 0 })); 


Console.WriteLine(test(1, new int[] { 3, 0, 2 }));
Console.WriteLine(test(2, new int[] { 1, 2, 0 }));


Console.WriteLine(test(2, new int[] { 5, 5, 4 }));
Console.WriteLine(test(2, new int[] { 6, 6, 0 }));
Console.WriteLine(test(0, new int[] { 3, 4, 5 }));


Console.WriteLine(test(0, new int[] { 1, 1, 0 }));
Console.WriteLine(test(1, new int[] { 1, 0, 1 }));
Console.WriteLine(test(2, new int[] { 0, 1, 1 }));


Console.WriteLine(test(0, new int[] { 6, 3, 3 }));
Console.WriteLine(test(1, new int[] { 2, 10, 2 }));


Console.WriteLine(test(2, new int[] { 5, 5, 5 }));
