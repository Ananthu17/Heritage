import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {
  constructor(private router:Router, private admin:AdminService,) {}

  selectedFiles = [];
  selectedVideos = [];
  

  ngOnInit(): void {
    this.admin.getHeritages().subscribe(
      (response:any) => {
        console.log(response)
        this.heritageData = response
      },
      (error) => {
        console.log(error)
      }
    );
  }

  onFileSelected(files: FileList): void {
    // Convert the FileList object to an array
    // console.log(files)
    this.selectedFiles = Array.from(files).map(item=>item.name);
    console.log(this.selectedFiles)
  }

  onVideoSelected(files: FileList): void {
    // Convert the FileList object to an array
    console.log(files)
    this.selectedVideos = Array.from(files).map(item=>item.name);
    console.log(this.selectedVideos)
  }

  // Create new heritage 
  onCreate(data)
  {
    data.photos = this.selectedFiles
    data.videos = this.selectedVideos
    console.log(data)
    this.admin.createHeritages(data).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getHeritages().subscribe(
          (response:any) => {
            console.log(response)
            this.heritageData = response
            this.showModal = !this.showModal;
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
  }

  deleteHeritage(id:number){
    this.admin.deleteHeritages(id).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getHeritages().subscribe(
          (response:any) => {
            console.log(response)
            this.heritageData = response
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
  }

  onEdit(user, data){
    const keys =Object.keys(data).filter(key => data[key] !== '')
    for(const item in user){
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key == item){
          user[item] = data[key]
        }
      }
    }
    this.admin.updateHeritage(user._id, user).subscribe(
      (response:any) => {
        console.log(response)
        this.admin.getHeritages().subscribe(
          (response:any) => {
            console.log(response)
            this.heritageData = response
            this.showEditModal = !this.showEditModal;
          },
          (error) => {
            console.log(error)
          }
        );
      },
      (error) => {
        console.log(error)
      }
    );
    console.log(user)
  }

  heritageData ={}
  showModal = false;
  showEditModal = false
  slectedHeritage = {}

  toggleEditModal(heritage: object){
    this.slectedHeritage = heritage
    this.showEditModal = !this.showEditModal;
  }

  toggleModal(){
    console.log(this.showModal)
    this.showModal = !this.showModal;
  }
}
