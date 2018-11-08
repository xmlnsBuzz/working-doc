// object 생성
// var myCat = {
// 	"name": "Meowsalot",
// 	"species": "cat",
// 	"favFood": "tuna"
// }
// array 생성
// var myFavColors = ["blue", "green", "purple"];

// green 은 myFavColors[1]
//-----------------------------

// object를 array할 때
// var varName = [{}, {}, {}] 의 형식이지만 내용이 많아지면

// var varName = [{},
// 	{},
// 	{},
// 	{}
// ]
// 또 다시
// var varName = [{},
// 	{

// 	},
// 	{

// 	},
// 	{

// 	}
// ]
// 로 칸을 바꿔 정리한다.



// var thePets = [{
// 		"name": "Meowsalot",
// 		"species": "cat",
// 		"favFood": "tuna"
// 	},
// 	{
// 		"name": "Barky",
// 		"species": "dogt",
// 		"favFood": "carrots"
// 	}
// ];

// 아래와 같이
//thePets[1].favFood

// 는 carrots이 된다.
// 또 위의 'var thePets ='을 제거하고 아래와 같이
// [
// 	{
// 	"name": "Meowsalot",
// 	"species": "cat",
// 	"favFood": "tuna"
// 	},

// 	{
// 	"name": "Barky",
// 	"species": "dogt",
// 	"favFood": "carrots"
// 	}
// ];

// 정리하면 .json 파일이 된다.


/* var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'animals1.json');
ourRequest.onload = function () {
	var ourData = ourRequest.responseText;
	JSON DATA를 가져올 때는 아래와 같이
	var ourData = ourRequest.responseText;
	console.log(ourData[0]);
};
ourRequest.send();
ocument.write(ourData[1]);
*/



// 아래는 JSON.parse 추가되고 개정된 부분

var pageCounter = 1;
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'animals' + pageCounter + '.json');
	ourRequest.onload = function () {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
		//console.log(ourData[0]);
	};
	ourRequest.send();
	pageCounter++;
	if (pageCounter > 3) {
		btn.classList.add('hide-me');
	}
});

function renderHTML(data) {
	var htmlString = "";
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species ;

		for (j = 0; j < data[i].foods.likes.length; j++) {
			if (j == 0) {
				htmlString += data[i].foods.likes[j];
			} else {
				htmlString += " and " + data[i].foods.likes[j];
			}
			
		}
		htmlString += " and dislikes ";
		
		for (j = 0; j < data[i].foods.dislikes.length; j++) {
			if (j == 0) {
				htmlString += data[i].foods.dislikes[j];
			} else {
				htmlString += " and " + data[i].foods.dislikes[j];
			}
		}
		htmlString += ".</p>";
	}
	animalContainer.insertAdjacentHTML('beforeend', htmlString);


}