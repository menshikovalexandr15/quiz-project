function updateProgress() {
    let answered = 0;
    for (let i = 1; i <= 10; i++) {
        let radios = document.getElementsByName("q" + i);
        let hasAnswer = false;
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                hasAnswer = true;
                break;
            }
        }
        if (hasAnswer) {
            answered++;
        }
    }
    let percent = (answered / 10) * 100;
    document.getElementById("progressFill").style.width = percent + "%";
    document.getElementById("progressPercent").innerHTML = Math.round(percent) + "%";
}

function checkTest() {
    let correct = 0;
    for (let i = 1; i <= 10; i++) {
        let radios = document.getElementsByName("q" + i);
        for (let j = 0; j < radios.length; j++) {
            if (radios[j].checked && radios[j].value === "correct") {
                correct++;
                break;
            }
        }
    }
    let percent = (correct / 10) * 100;
    document.getElementById("result").innerHTML = correct + " из 10<br>" + percent + "%";
}

function clearTest() {
    for (let i = 1; i <= 10; i++) {
        let radios = document.getElementsByName("q" + i);
        for (let j = 0; j < radios.length; j++) {
            radios[j].checked = false;
        }
    }
    document.getElementById("result").innerHTML = "";
    updateProgress();
}

for (let i = 1; i <= 10; i++) {
    let radios = document.getElementsByName("q" + i);
    for (let j = 0; j < radios.length; j++) {
        radios[j].onclick = updateProgress;
    }
}

updateProgress();
