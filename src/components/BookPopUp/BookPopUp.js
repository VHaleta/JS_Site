const BookPopUp = ({ book }) => {
  const style = "book" + (animation ? " animation" : "");
  return (
    <div id="modal" class="modal bounceIn">
      <div id="close_modal">+</div>
      <div class="modal_txt">Текст в модальном окне</div>
    </div>
  );
};

export default BookPopUp;
