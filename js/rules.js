console.log('Rules.js Has started!');
var rules = [
    {
        rule:{
            text:'No hacking'
        }
    },
    {
        rule:{
            text:'No naked killing'
        }
    }
]

function load() {
    for (var rule in rules) {
        var ruleText = [];

        var obj = rules[rule];
        for (var text in obj) {
            console.log(obj);
            ruleText += `
            <li class="list-group-item" data-aos="fade-up" data-aos-delay="1000">${obj[text].text}</li>
            `;
        }
        document.getElementById("ruleList").innerHTML += `${ruleText}`;
    }
}
load()