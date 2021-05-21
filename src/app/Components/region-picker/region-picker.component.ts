import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'region-picker',
  templateUrl: './region-picker.component.html',
  styleUrls: ['./region-picker.component.css'],
  providers: [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => RegionPickerComponent),
            multi: true     
    }   
    ]
})
export class RegionPickerComponent implements OnInit, ControlValueAccessor{

  region = new FormControl("")

  constructor() { }

  ngOnInit(): void {
    this.region.valueChanges.subscribe(newValue => {
      this.onChange(newValue)
    })
  }

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(value: any): void {
    this.region.setValue(value)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

}
