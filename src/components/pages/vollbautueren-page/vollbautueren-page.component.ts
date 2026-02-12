import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vollbautueren-page',
  templateUrl: './vollbautueren-page.component.html',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VollbautuerenPageComponent {
  pictureList = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpeg", "10.jpg",
    "11.jpeg", "12.jpeg", "13.jpeg", "14.jpg", "15.jpg",
    "16.jpeg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
    "31.jpeg", "32.jpg", "33.jpeg", "34.jpg", "35.jpeg",
    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpeg",
    "41.jpg", "42.jpg", "43.jpeg", "44.jpg", "45.jpg",
    "46.jpeg", "47.jpg", "48.jpg", "49.jpg", "50.jpeg",
    "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpeg",
    "56.jpg", "57.jpeg", "58.jpg", "59.jpg", "60.jpg",
    "61.jpg", "62.jpg", "63.jpg", "64.jpg", "65.jpeg",
    "66.jpg", "67.jpeg", "68.jpg", "69.jpeg", "70.jpeg",
    "71.jpg", "72.jpg", "73.jpeg", "74.jpg", "75.jpeg",
    "76.jpeg", "77.jpeg", "78.jpg", "79.jpg", "80.jpg",
    "81.jpg", "82.jpg", "83.jpg", "84.jpg", "85.jpeg",
    "86.jpg", "87.jpg", "88.jpg", "89.jpg", "90.jpeg",
    "91.jpg", "92.jpeg", "93.jpg", "94.jpg", "95.jpg",
    "96.jpg", "97.jpg", "98.jpg", "99.jpg", "100.jpg",
    "101.jpg", "102.jpg", "103.jpg", "104.jpg", "105.jpg",
    "106.jpg", "107.jpg", "108.jpg", "109.jpg", "110.jpeg",
    "111.jpg", "112.jpg", "113.jpg", "114.jpg", "115.jpg",
    "116.jpg", "117.jpeg", "118.jpeg", "119.jpg", "120.jpg",
    "121.jpg", "122.jpg", "123.jpg", "124.jpg", "125.jpeg",
    "126.jpg", "127.jpg", "128.jpg", "129.jpg", "130.jpg",
    "131.jpeg", "132.jpeg", "133.jpg", "134.jpg", "135.jpeg",
    "136.jpg", "137.jpg", "138.jpeg", "139.jpeg", "140.jpeg",
    "141.jpg", "142.jpeg", "143.jpg", "144.jpg", "145.jpg",
    "146.jpeg", "147.jpeg", "148.jpeg", "149.jpg", "150.jpg",
    "151.jpg", "152.jpg", "153.jpg", "154.jpg", "155.jpg",
    "156.jpg", "157.jpg", "158.jpg", "159.jpeg", "160.jpg",
    "161.jpg", "162.jpg", "163.jpg", "165.jpg",
    "166.jpg", "167.jpg"];
}