import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    // function to add 0 with a number if number is less then 10. e.g 9 to 09.
    pad(i: number): string {
        return i < 10 ? `0${i}` : `${i}`;
    }

    // function to get proper time from ngb timepicker
    getProperTimeFromNgbTime(time: NgbTimeStruct): string {
        if (!time) {
            return null;
        }
        return `${this.pad(time.hour)}:${this.pad(time.minute)}`;
    }

    // funtion to get NgbTime format from normal time format
    getNgbTimeFromProperTime(value: string): NgbTimeStruct {
        if (!value) {
            return null;
        }
        const split = value.split(':');
        return {
            hour: parseInt(split[0], 10),
            minute: parseInt(split[1], 10),
            second: parseInt(split[2], 10)
        };
    }

    // function to convert date to a specific formate
    getFormattedDate(date: string): string {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(date, 'yyyy-MM-dd');
    }

    // function to convert date to a specific formate
    getFormattedDateTime(date: string): string {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(date, 'yyyy-MM-dd HH:mm');
    }

    // function to convert date to a specific formate
    getFormattedTime(date: string): string {
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(date, 'HH:mm:ss');
    }

    // funtion use to prepare proper date from ngbDatepicker
    prepareDateFormat(model: NgbDateStruct) {
        const date = model.year + '-' + model.month + '-' + model.day;
        const datePipe = new DatePipe('en-US');
        return datePipe.transform(date, 'yyyy-MM-dd').toString();
    }

    // function to return the date format used in ngbDatepicker
    prepareDatePickerDateFormat(date: string) {
        const result = new Date(date);
        const output = {
            day: result.getDate(),
            month: result.getMonth() + 1,
            year: result.getFullYear()
        };
        return output;
    }

    isStartTimeBefore(startTime: string, endTime: string) {

        if (!startTime || !endTime) return false;

        const _startTime = moment(startTime, 'HH:mm:ss');
        const _endTime = moment(endTime, 'HH:mm:ss');
        return _startTime.isBefore(_endTime);
    }

    getNgbDateStruct(d: Date) {
        return {
            day: d.getDate(),
            month: d.getMonth() + 1,
            year: d.getFullYear()
        }
    }

    //method to scrolll to the error message
    scrollToFirstErrorMessage() {
        setTimeout(() => {
            const firstElementWithError = document.querySelector('.invalid-feedback');
            if (firstElementWithError && firstElementWithError.parentElement) {
                firstElementWithError.parentElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 200);
    }

    //method for common settings of multiple selection drop down
    getCommonMultiSelectSettings(): any {
        return {
            "singleSelection": false,
            "idField": "id",
            "textField": "name",
            "itemsShowLimit": 2,
            enableCheckAll: false
        }

    }

    //common method to add some text in quill editor
    insertTextInQuill(text: string, editorObject: any): string {
        // var quill = new Quill('#companyInfoEditor');
        const cursor = editorObject.quillEditor.getSelection();
        if (cursor) {
            // let delta = editorObject.quillEditor.getContents();
            // editorObject.quillEditor.updateContents(delta
            //     .retain(6)                  // Keep 'Hello '
            //     .delete(5)                  // 'World' is deleted
            //     .insert('Quill')
            //     .retain(1, { bold: true })  // Apply bold to exclamation mark
            // );

            editorObject.quillEditor.insertText(cursor.index, text + "\n", 'bold', true);
            editorObject.quillEditor.setSelection(cursor.index + text.length);
        }
        else {
            const content = editorObject.quillEditor.getText();
            editorObject.quillEditor.insertText(content.length, text + "\n", 'bold', true);
            editorObject.quillEditor.setSelection(content.length + text.length);
        }
        return editorObject.quillEditor.root.innerHTML;
    }

    getCompanyPlaceHolders(): string[] {
        return ["[company_name]"];
    }

    getCandidatePlaceHolders(): string[] {
        return ["[company_name]","[candidate_name]"];
    }


}
