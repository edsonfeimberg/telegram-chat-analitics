function readFile(file_list) {

    const reader = new FileReader;

    reader.onload = function (e) {
        let text = e.target.result
        let json = JSON.parse(text);
        let array = json.messages;
        let word_vault = {};

        array.forEach(element => {

            if (typeof (element.text) === 'string') {

                let splited_message = element.text.split(' ');

                splited_message.forEach(word => {

                    if (word in word_vault) {
                        word_vault[word] = parseInt(word_vault[word]) + 1;

                    } else {
                        word_vault[word] = 1
                    }
                })

                console.log(word_vault);
            } else {
                console.log('não era string');
            }

        });

    };

    reader.readAsText(file_list[0]);
}