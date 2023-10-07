//1
const stringSize = (text) => {
    return text.length;
}
//2
const replaceCharacterE = (text) => {
    return text.replace("e", " ");

}
//3
const concatString = (text1, text2) => {
    return text1.concat(text2);
    //return text1+text2;

}
//4
const showChar5 = (text) => {
    return text[4];
    // return text.charAt(4);

}
//5
const showChar9 = (text) => {
    return text.slice(0, 9);


}
//6
const toCapitals = (text) => {
    return text.toUpperCase();

}
//7
const toLowerCase = (text) => {
    return text.toLowerCase();

}
//8
const removeSpaces = (text) => {
    return text.trim();

}
//9
const IsString = (text) => {
    if (typeof text == "string") {
        return true;
    }

}
//10
const getExtension = (text) => {
    return text.slice(text.lastIndexOf(".") + 1, text.length);

}//11
const countSpaces = (text) => {
    let count = 0;
    for (let i = 0; i < text.length + 1; i++) {
        if (text[i] === " ") {
            count++;
        }
    }
    return count;
}
//12
const InverseString = (text) => {
    let reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i];
    }
    return reversedText;
}
//13
const power = (x, y) => {
    return Math.pow(x, y)

}
//14
const absoluteValue = (num) => {
    return Math.abs(num);

}
//15
const absoluteValueArray = (array) => {
    let absArray = [];
    for (let i = 0; i < array.length; i++) {
        absArray.push(Math.abs(array[i]));
    }
    return absArray;
    //or
    // return array.map(arr=>{return Math.abs(arr)});
}
//16
const circleSurface = (radius) => {
    let sur = Math.round(Math.PI * radius * radius);
    return sur;

}
//17
const hypothenuse = (ab, ac) => {
    let hyp = Math.sqrt(ab * ab + ac * ac);
    return hyp;

}
//18
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}
//19
const createLanguagesArray = () => {
    let array = ["Html", "CSS", "Java", "PHP"];
    return array;
}
//20
const createNumbersArray = () => {
    let array = [0, 1, 2, 3, 4, 5];
    return array;

}
//21
const replaceElement = (languages) => {
    languages = createLanguagesArray();
    languages[2] = "Javascript";
    return languages;

}
//22
const addElement = (languages) => {
    languages = replaceElement(languages);
    languages.push("Ruby", "Python");
    return languages;

}
//23
const addNumberElement = (numbers) => {
    numbers = createNumbersArray();
    numbers.unshift(-2, -1);
    return numbers;
}
//24
const removeFirst = (languages) => {
    languages = addElement(languages);
    languages.shift();
    return languages;

}
//25
const removeLast = (languages) => {
    languages = removeFirst(languages);
    languages.pop();
    return languages;
}
//26
const convertStrToArr = (social_arr) => {
    social_arr = social_arr.split(",");
    return social_arr;

}
//27
const convertArrToStr = (languages) => {
    languages = languages.join(",");
    return languages;
}
//28
const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();

}