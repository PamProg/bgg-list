import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../class/game';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-tableau',
    templateUrl: './tableau.component.html',
    styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

    games: Game[];

    ids: number[];

    constructor(private http: HttpClient) {
        this.games = [];

        // top 100
        this.ids = [174430, 161936, 182028, 12333, 167791, 187645, 169786, 120677, 193738, 173346, 84876, 115746,
                    102794, 3076, 220308, 31260, 96848, 205637, 183394, 170216, 205059, 124361, 209010, 25613, 164153,
                    164928, 2651, 175914, 177736, 72125, 180263, 55690, 121921, 28720, 221107, 35677, 126163, 124742,
                    171623, 233078, 68448, 122515, 178900, 146508, 18602, 146021, 12493, 28143, 110327, 157354, 62219,
                    230802, 93, 159675, 163412, 40834, 201808, 132531, 162886, 103885, 150376, 37111, 216132, 172386,
                    2511, 205896, 144733, 73439, 42, 102680, 36218, 125153, 30549, 194655, 521, 104162, 127023, 34635,
                    155426, 161970, 9609, 185343, 175155, 103343, 128882, 155068, 147020, 146652, 70149, 148949, 14996,
                    198928, 123260, 126042, 43111, 197376, 14105, 17133, 171131, 91];

        // less than top 100
        // this.ids = [174430, 161936, 182028, 12333, 167791, 187645, 169786, 120677, 193738, 173346, 84876, 115746,
        //             102794, 3076, 220308, 31260, 96848, 205637, 183394, 170216, 205059, 124361, 209010, 25613, 164153,
        //             164928, 2651, 175914, 177736, 72125, 180263, 55690, 121921, 28720, 221107, 35677, 126163, 124742];
    }

    ngOnInit() {
        this.ids.forEach(id => {

            this.getGameInfo(id)
            .subscribe(ginfo => {
                this.games.push(ginfo);
                // setTimeout(null, 300);
                // setInterval(null, 500);
            });
            
        });
        
    }

    getGameInfo(id: number) {
        return this.http.get<Game>("https://bgg-json.azurewebsites.net/thing/" + id);
    }





}
