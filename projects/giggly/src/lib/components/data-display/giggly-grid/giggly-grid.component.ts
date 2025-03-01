import { Component, Input, Output, EventEmitter, ContentChildren, QueryList } from '@angular/core';
import { GigglyGridColComponent } from '../giggly-grid-col/giggly-grid-col.component';
export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  filterable?: boolean;
}
@Component({
  selector: 'giggly-grid',
  standalone: false,
  templateUrl: './giggly-grid.component.html',
  styleUrl: './giggly-grid.component.scss'
})
export class GigglyGridComponent {
  @Input() data: any[] = [];
  @Input() pageSize: number = 5;
  @Input() sortable: boolean = true;
  @Input() filterable: boolean = true;

  // columns: any[] = [];
  filteredData: any[] = [];
  displayedData: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  sortState: { field: string, direction: 'asc' | 'desc' | '' } = { field: '', direction: '' };

  ngOnInit() {
    this.filteredData = [...this.data];
    this.updatePagination();
  }

  /** 🔄 Sorting Logic */
  sortColumn(field: string) {
    if (!this.sortable) return;

    this.sortState.direction = this.sortState.field === field && this.sortState.direction === 'asc' ? 'desc' : 'asc';
    this.sortState.field = field;

    this.filteredData.sort((a, b) => {
      return this.sortState.direction === 'asc'
        ? a[field] > b[field] ? 1 : -1
        : a[field] < b[field] ? 1 : -1;
    });

    this.updatePagination();
  }

  /** 🔍 Filtering Logic */
  filterData(event: any, field: string) {
    const filterValue = event.target.value.toLowerCase();
    this.filteredData = this.data.filter(item => item[field].toString().toLowerCase().includes(filterValue));

    this.currentPage = 1; // Reset to first page after filtering
    this.updatePagination();
  }

  /** 📄 Pagination Logic */
  updatePagination() {
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedData = this.filteredData.slice(startIndex, startIndex + this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }
  @ContentChildren(GigglyGridColComponent) gridColumns!: QueryList<GigglyGridColComponent>;
  columns: { field: string; title: string }[] = [];

  ngAfterContentInit() {
    this.updateColumns();
    this.gridColumns.changes.subscribe(() => this.updateColumns()); // Listen for changes
  }

  private updateColumns() {
    this.columns = this.gridColumns.map(col => ({
      field: col.field,
      title: col.title,
    }));
  }


  // here

}
