let arr = [];
let numfrom = $('#numfrom')
let numfor = $('#numfor')
let numinterval = $('#numinterval')
$("#btn").click(() => {
    if (!numfrom.val() || !numfor.val() || !numinterval.val()) {
        $('#error-text').text('Заповніть всі поля!').addClass("error-text");
    } else {
        let random = _.range(Number(numfrom.val()), Number(numfor.val()), Number(numinterval.val()));
        $("#textarea").text(random);
        arr = random;
    }
});

$("#btn2").click(() => {
    let shuffle = _.shuffle(arr);
    $("#textarea").text(shuffle);
    let min = _.min(shuffle);
    let max = _.max(shuffle);
    let minindex = _.indexOf(shuffle, min);
    let maxindex = _.indexOf(shuffle, max);
    $("#result h3:nth-child(1)").text(`Мінімальне значення: ${min}`);
    $("#result h3:nth-child(2)").text(`Максимальне значення: ${max}`);
    $("#result h3:nth-child(3)").text(`Індекс мінімального значення: ${minindex}, індекс максимального значення: ${maxindex}`);
});