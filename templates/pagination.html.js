
export const addedPagination = (nbrePage,url) => {
    if (nbrePage > 1) {
        let i = 0;
        const b1 =`<nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>`;

        let b2 = "";
        for (i; i < nbrePage; i++) {
            b2 +=`<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
        }

        const b3 = `<li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>`;
        return b1 +b2 +b3   
    }
    
}


