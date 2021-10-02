import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  title = 'add-remove-components';
  @Input() message = '';
  members : Member[] = [];
  memberName = '';
  memberDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddMember()
  {
    if(this.memberName !== '' && this.memberDescription !== '')
    {
      this.members.push({
        name: this.memberName,
        description: this.memberDescription
      });
    }
    this.memberName = '';
    this.memberDescription = '';
  }

  onRemoveMember(member: Member)
  {
    this.members = this.members.filter(me => me.name !== member.name);
  }
}

interface Member
{
  name : string,
  description : string
}