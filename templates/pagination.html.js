
export const addedPagination = (nbrePage,url) => {
    if (nbrePage > 1) {
        let i = 0;
        const b1 =`
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        `;

        let b2 = "";
        for (i; i < nbrePage; i++) {
            b2 +=`<li class="page-item"><a class="page-link navPage" href="#" data-id ="${i+1}">${i+1}</a></li>`
        }

        const b3 = `<li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div`;
        return b1 +b2 +b3   
    }
   return ""; 
}


