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
    },
    {
        rule:{
            text:'No Asking Admins for stuff or OP'
        }
    },
    {
        rule:{
            text:'Don\'t be toxic or disrespectful to ANYONE including other players'
        }
    },
    {
        rule:{
            text:'No swearing'
        }
    },
    {
        rule:{
            text:'When the owner or an admin says something, it is final'
        }
    },
    {
        rule:{
            text:'If you see a player hacking or an admin abuse of powers please report it on the discord <a style="color:blue;" href="https://discord.gg/8KdNwwFFbA">https://discord.gg/8KdNwwFFbA</a> or to a staff'
        }
    },
    {
        rule:{
            text:'These rules can change at anytime, it is your job to know the rules, a staff memeber will remind you of the rules if you break them'
        }
    }
]
var number = 1000;
function load() {
    for (var rule in rules) {
        var ruleText = [];

        var obj = rules[rule];
        for (var text in obj) {
            console.log(obj);
            ruleText += `<br>
            <li class="list-group-item" data-aos="fade-up" data-aos-delay="${number}">${obj[text].text}</li>
            `;
        }
        document.getElementById("ruleList").innerHTML += `${ruleText}`;
        number += 100;
    }
}
load()