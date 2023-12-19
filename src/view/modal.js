const $btnCloseModal = document.querySelector(".training__dialog .btn__cancel")
$btnCloseModal.addEventListener("click", () => modal.close())

export const modal = {
    $modal: document.querySelector(".training__dialog"),
    open() {
        this.$modal.showModal()
    },

    close() {
        this.$modal.close()
    },

    modalContent(content) {
        this.$modal.querySelector(".modal__body").innerHTML = content
    }
}