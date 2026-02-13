// Try catch
function fun(){
    try {
        const a = 10;
        console.log('a: ', a);
        a=11;
        console.log('a: ', a);
    } catch (error) {
        console.log(" error: ",error.message);
    }
}
fun();


// Throw  and  Finally
function check(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    console.log("Access granted");
}
try {
    check(16);
} catch (error) {
    console.error(error.message);
}finally{
    console.log("this will run regardless of an error occur or not");
}