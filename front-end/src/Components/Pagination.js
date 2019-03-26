import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export  class Pagination extends Component {

  setPagination(page,total){
    
    if(total <= 3){
        let cut_pagination = [];
        let index = 1;
        while(cut_pagination.length < total){
            cut_pagination.push(index++);
        }
        return cut_pagination;
    }
   
    let pagination = [];

    if(page === 1){
        pagination.push(page,page+1,page+2);        
    } else if(page === total){
        pagination.push(page-2,page-1,page);
    } else {
        pagination.push(page-1,page, page+1)
    }
    return pagination;

  }

  render() {
    
    const total = this.props.pagination.total;
    const page  = this.props.pagination.page ? this.props.pagination.page : 1

    return (
      <div className="pagination">
        <ul>
            {   page-2 >= 1 ? 
                    <Link key={total-1}  to={`/category/${this.props.pagination.category}/1`} >
                        <li className="pagination-range">
                            <span>First</span>
                        </li>
                    </Link>    
                : ''
            }
            
            {
                this.setPagination(page,total)
                .map( page_num => 
                <Link key={page_num}  to={`/category/${this.props.category}/${page_num}`} >
                    <li className={ page_num === page ? 'active' : ''}>
                        {page_num}
                    </li>
                </Link>)
            }
            {   page+2 <= total ? 
                    <Link key={total}  to={`/category/${this.props.category}/${total}`} >
                        <li className="pagination-range">
                            <span>Last</span>
                        </li>
                    </Link>    
                : ''
            }
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
    return state;
}
  
export default connect(mapStateToProps)(Pagination);