let List1 = ["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"]
let List2 = [ "Adwait","Laxman","Amit", "Adnan","Nitin","Gaurav"]

//a. Get a unique set of users from List1 which are not in List2
let ansA = []
for (let i of List1){
    let current = i 
    let found = 0
    for (let j of List2){
        if (current === j){
            found = 1 
        }
    }
    if (found === 0){
        ansA.push(i)
    }
}
console.log(ansA)

//Get a unique set of users from List2 which are not in List1
let ansB = []
for (let i of List2){
    let current = i 
    let found = 0
    for (let j of List1){
        if (current === j){
            found = 1 
        }
    }
    if (found === 0){
        ansB.push(i)
    }
}
console.log(ansB)

//c. Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)
let ansC = []
for (let i of List2){
    let current = i 
    let found = 0
    for (let j of List1){
        if (current === j){
            found = 1 
        }
    }
    if (found !== 0){
        ansC.push(i)
    }
}
console.log(ansC)
