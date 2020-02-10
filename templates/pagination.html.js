
export const addedPagination = (nbrePage,url) => {
    if (nbrePage > 1) {
        const b1 =`
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
        `;

        let b2 = "";
        for (let i = 1; i <= nbrePage; i++) {
            b2 +=`<li class="page-item"><a class="page-link navPage" href="#" data-id ="${i}">${i}</a></li>`
        }

        const b3 = `</ul>
                </nav>
            </div>
        </div`;
        return b1 + b2 + b3;  
    }
   return ""; 
}
