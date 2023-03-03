var a=[1,2,3,4,5,6,7,8,9,10];
function even(a)
{
	var count=0;
	for(i=0;i<a.length;i++)
	{
		if(a[i]%2==0)
		{
			count++;
		}
	}
	return count;
}
document.write(even(a));
document.write("<br>");


// var array=[1,2,3,4,5,6,7,8,9,10];
// function even(array)
// {
	// var b=[];
	// for(i=0;i<array.length;i++)
	// {
		// if(array[i]%2==0)
		// {
			// b.push(array[i]);
		// }
	// }
	// return b;
// }
// document.write(even(array));