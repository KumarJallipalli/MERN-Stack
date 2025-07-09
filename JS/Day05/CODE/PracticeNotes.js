let post = {
    userName : "KumarJallipalli",
    content: "How to get Web Develper Job",
    likes: 1000,
    reposts: 10,
    tags: ["jobs", "web development", "software developer"]
}

// This is WRONG
// console.log(post[userName]);

// This is Correct
console.log(post["userName"]);

// This is Correct
let userName = "content"
console.log(post[userName]);

// This is WRONG
// console.log(post."userName");
// This is Correct
console.log(post.userName);


/**
 * Random Integers From 1 to 10
 * ----------------------------

        Step1 : let num = Math. random( );      // 0.46747741318127045

        Step2 : num = num * 10;                 // 4.674774131812704

        Step3 : num = Math. floor(num);         // 4

        Step4 : num = num + 1;                  // 5
*/
let randomNumber = Math.floor(Math.random()*10) + 1;
console.log(randomNumber);