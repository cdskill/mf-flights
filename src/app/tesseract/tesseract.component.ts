import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as Tesseract from "tesseract.js";

@Component({
  selector: 'app-tesseract',
  template: `
    <p>
      tesseract works!
    </p>
    <p>
      Recognized text: {{recognizedText ?? 'pending...'}}
    </p>
  `,
  styleUrls: ['./tesseract.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TesseractComponent implements OnInit {

  recognizedText: string | undefined = undefined;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    Tesseract.recognize(
      'https://tesseract.projectnaptha.com/img/eng_bw.png',
      'eng',
      { logger: m => console.log(m) },
    ).then((v: Tesseract.RecognizeResult) => {
      console.log(v.data.text);
      this.recognizedText = v.data.text;
      this.cdr.markForCheck();
    })
  }
}
