import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-instagram",
  templateUrl: "./instagram.component.html",
  styleUrls: ["./instagram.component.scss"]
})
export class InstagramComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    lazyLoad: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      },
      1440: {
        items: 6
      }
    }
  };

  imgs = [
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/46818702_134383644231768_8549917302154951480_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=Op4PdGbWNt0AX8h5cb8&oh=f709aa6410c3533d02995c5064f6b001&oe=5ECCDC01",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/47584194_2153147434948264_4546639399340987400_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=JQKx-JVA5tUAX-g00WJ&oh=3e6f3c132aaf4745dbaeba5d3dc998fb&oe=5ED1DD4E",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/47585652_758904887794432_8255957686140195451_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=pEol-hg8zeAAX8lNpGa&oh=1d235316961051f71825691168750b59&oe=5EDAEB8A",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/45749222_547527022325164_471467257536720396_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=qDPwRUhES48AX_wElcv&oh=b7a97f3376af9064bfed6dee7c232707&oe=5ECA5402",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/47454191_124139955280765_9177034075031580138_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=4AazKz_0NesAX-85zTq&oh=52fd0351b4a826cf03c9695faeb877da&oe=5EBB3E7C",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/47691284_331816634073591_4476562384362936459_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=8WgqpnMm79kAX8TGABQ&oh=8ade997b1fb8bd50657754da69b834aa&oe=5ED9EAEC",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/39597763_297895880940836_5379712246391767040_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=A2iLI1Am7ZAAX-JvX0o&oh=e00ac50cd511e92e1e0fc540f9ceaf88&oe=5EC1203C",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/39107261_537814706651076_7149798754474786816_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=8pDygTF0GwQAX8KgQLw&oh=0816f2334d1ec0ef94afda6bf7ebeee4&oe=5EBF2F87",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/39676075_232565224268973_4358485511505969152_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=PZtxlc8Ndq8AX_u26VA&oh=5e6c10b276a77369f12edbcca83077ee&oe=5EDAE1C1",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/35337405_242379073214835_8867327116396462080_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=Ni1tCYp1gBcAX8Zq0Ek&oh=a46387ac7fa902fdbfe7077ea2a18d8a&oe=5EC055A2",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/35617975_653639578302592_6886703819724423168_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=Xk2Emr36yWoAX8Rv6KZ&oh=3a8cff6a36b0d89ee3f8914a2296606d&oe=5ED5F902",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/36497359_168536220673791_6369479599964815360_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=8-vNKHV-QOYAX_4W27-&oh=5c00f1661a102dcaf5694e6444b1f0d8&oe=5EC5EC1F",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/35278168_1876490492397132_7677340782759510016_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=5Gy00sxefwMAX_Xlt3u&oh=cb7d571bfc92b244d51a2912ce172dc1&oe=5EB57890",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/36135851_2148089878809391_8623367738418528256_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=Nqoo4mujOR8AX8kjRJl&oh=9727a7dff667d11ddb142b320b148c94&oe=5EDBFCB6",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/35119695_1011899738985424_3277479231361122304_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=CIdv51R6mRMAX9GDKv2&oh=423680abe2eca6134a403fb0a1e669c3&oe=5ED52BFB",
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/36136252_2212247199003519_4970204041184280576_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=mKInZ5OzB5wAX_NfZAB&oh=b705eca45470e813d702d713fe524500&oe=5EC06AD9"
  ];

  constructor() {}

  ngOnInit() {}
}
