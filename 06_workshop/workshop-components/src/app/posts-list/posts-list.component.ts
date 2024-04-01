import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{

  posts: Post[] = [];
  loading: boolean = true;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    setTimeout(() => {
      this.api.getPosts(5).subscribe(posts => {
        console.log(posts);
        this.posts = posts;
        this.loading = false; // Set loading to false when posts are loaded
      });
    }, 2000); // Set timeout for 2 seconds (adjust as needed)
  }


}
