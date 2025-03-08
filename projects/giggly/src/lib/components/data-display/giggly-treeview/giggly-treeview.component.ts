import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface TreeNode {
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
  selected?: boolean;
}


@Component({
  selector: 'giggly-tree-view',
  standalone: false,
  templateUrl: './giggly-treeview.component.html',
  styleUrl: './giggly-treeview.component.scss'
})
export class GigglyTreeviewComponent {
  @Input() treeData: TreeNode[] = [];
  @Output() nodeSelect = new EventEmitter<TreeNode>();

  toggleNode(node: TreeNode) {
    node.expanded = !node.expanded;
  }

  selectNode(node: TreeNode) {
    this.nodeSelect.emit(node);
  } 
}
