/**
 * Created by alexanderlerma on 2/27/17.
 */
import {FormControl} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {TemperatureService} from "../../service/temperature.service";
import {PhService} from "../../service/ph.service";
import {Temperature} from "../../model/temperature.model";
import {Ph} from "../../model/ph.model";

@Component({
  selector: 'vf-search',
  templateUrl: './search.component.html',
  providers: [FormControl, TemperatureService, PhService]
})
export class VFSearchComponent implements OnInit {


  private temperatures: Temperature[];
  private phs: Ph[];

  constructor(private formCtrl: FormControl,
              private temperatureService: TemperatureService,
              private phService: PhService) {}

  ngOnInit() {
    this.temperatureService.getTemperatures().then(temperatures => this.temperatures = temperatures);
    this.phService.getPhs().then(phs => this.phs = phs);
  }
}
