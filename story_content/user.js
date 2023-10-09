function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Sb0kAS0CwU":
        Script1();
        break;
  }
}

function Script1()
{
  if (document.seen !== 1) {
 document.seen = 1;
 let wrapper = document.querySelector('#wrapper');
 let slide = document.querySelector('#slide');
 let target = document.querySelector('#preso');
 target.style.transformOrigin = '50% 0';
 target.style.transform = 'scale('+(wrapper.offsetHeight/slide.offsetHeight)+')';
 }
}

