import { Component, OnInit } from '@angular/core';
import { Ipost } from '../models/posts';
import { posts } from '../constant/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postArray : Array<Ipost> = []

  constructor() { }

  ngOnInit(): void {
    this.postArray = posts
  }

}
