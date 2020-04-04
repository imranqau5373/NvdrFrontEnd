export class Encrypter {


    constructor() {
    }
    static encryptUrl(_url: string, _params: Array<number>): Array<string> {

        let slash = "/";
        if (_url.endsWith(slash) == false) {
            _url += slash;
        }


        let routeArray = Array<string>();
        _params.forEach(x => {
            let encrypted = this.encodeParam(x);
            _url += encrypted + slash;
        });
        routeArray.push(_url);
        return routeArray;
    }

    private static encodeParam(param: number): string {

        return this.encrypt(param, 'bbvgjj6', 'bbvgjj677*hhbvYYYHNNMB')
    }

    public static decodeParam(inputText) {

        return this.decrypt(inputText, 'bbvgjj6', 'bbvgjj677*hhbvYYYHNNMB');
    }


    public static encrypt(param, encryptionText, encryptionText2) {
        let Pattern = "";
        for (let i = 0; i < encryptionText.length; i++) {
            for (let j = 0; j < encryptionText2.length; j++) {
                Pattern += encryptionText[i] + encryptionText2[j];
            }
        }

        let text = Pattern.substr(0, 7) + + param + Pattern.substr(7, 22);
        let inputText = '0';
        const length = text.length;
        for (let i = 0; i < length; i++) {
            inputText += text.charCodeAt(i).toString(16);
        }
        return inputText;

    }
    public static decrypt(inputText, encryptionText, encryptionText2) {
        let Pattern = "";
        for (let i = 0; i < encryptionText.length; i++) {
            for (let j = 0; j < encryptionText2.length; j++) {
                Pattern += encryptionText[i] + encryptionText2[j];
            }
        }

        let p1 = Pattern.substr(0, 7);
        let p2 = Pattern.substr(7, 22);

        let string = '';
        let result: number = -1;
        inputText = inputText.slice(1);
        const length = inputText.length;
        for (let i = 0; i < length;) {
            const code = inputText.slice(i, i += 2);
            string += String.fromCharCode(parseInt(code, 16));
        }
        if (string.includes(p1) && string.includes(p2)) {
            string = string.replace(p1, '').replace(p2, '');
            result = parseInt(string)
        } else {
            window.location.href = '/error';
        }
        return result;
    }

}