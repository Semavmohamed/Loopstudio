
const allLists = document.querySelectorAll('ul');

allLists.forEach(list => {
  // حدد جميع العناصر <li> داخل كل قائمة
  const listItems = list.querySelectorAll('li');

  // أضف حدث النقر على كل عنصر <li>
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // إزالة الكلاس active من جميع العناصر داخل نفس القائمة
      listItems.forEach(li => li.classList.remove('active'));
      
      // إضافة الكلاس active للعنصر الذي تم النقر عليه
      item.classList.add('active');
      item.style.fontWeight='bold';
    });
  });
});

const toggleButton = document.getElementById('toggleButton');
const navbarCollapse = document.getElementById('navbarNav');

toggleButton.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show'); // إضافة أو إزالة الخلفية عند الفتح
});
