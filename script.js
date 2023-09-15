//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

    let temp = [];
    let regex = /\bthe\b | \ban\b | \ba\b/i;

    let ans = {};

    // console.log(touristSpots);

    for(let i=0; i<touristSpots.length; i++){
        let currentArticleArray = touristSpots[i].match(regex);
        // console.log(currentArticleArray);



        if(currentArticleArray){
            let editedArrayElement = touristSpots[i].replace(currentArticleArray[0], "").trim();
            temp.push(editedArrayElement);
            ans[editedArrayElement] = touristSpots[i];
        }
        else{
            temp.push(touristSpots[i]);
            ans[touristSpots[i]] = touristSpots[i];
        }
    }

    // console.log(temp);
    temp.sort();

    for(let i=0; i<temp.length; i++){
        temp[i] = ans[temp[i]];
    }

    // console.log(temp);

    let element = document.getElementById('band');
    // console.log(element);

    for(let i=0; i<temp.length; i++){
        let li = document.createElement('li');
        let text = document.createTextNode(temp[i]);
        li.appendChild(text);
        element.appendChild(li);
    }