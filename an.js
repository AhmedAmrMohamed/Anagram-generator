pr=[] //conation 26 prime number.
dic=[]  //in c++ map<int,vector <string> > dic;
// console.log('as')
function seive() //return
  {
    numbers =[];
    primes=[]
      n=103
    for(var i=0;i<n;i++)numbers.push(0);
    for(var i=2;i<n;i++)
      {
        if(!numbers[i])
          {
            primes.push(i);
            for(var j=i*2;j<n;j+=i)
            numbers[j]=1;
          }
      }
      return  primes;
  }
  function map(x)
    {
      x = x.charCodeAt(0)-97 //get the ascii value of cha x.
      // console.log(pr[x])
      return  pr[x];         //return it's prime equlivent.
    }
  function valid(word)
    {
      return word.length<6
    }
  function wordToKey(word)
    {
      si=word.length;
      product = 1;
      for(var i =0;i<si;i++)
        {
          // console.log(map(word[i]))
          product *= map(word[i]);
        }
        return  product;
    }
    function addtodic(word)
    {
      key = wordToKey(word.toLowerCase())
      // console.log(word.toLowerCase())
      // console.log(dic[key]==null)
      if(dic[key]==null)
          dic[key]=[];
      dic[key].push(word);
    }
    function getAnagrams(word)
      {
        return dic[wordToKey(word)];
        // if(arr==null)arr=[];
        // // divs = divide(word)
        // // console.log(arr)
        // for(i=0;i<divs.length;i++)
        //   {
        //
        //     // if(divs[i]!=null)
        //     // arr = arr.concat(dic[divs[i]]);
        //   }
        // console.log(arr)
        // return arr;
      }
    function loadDic()
      {
        si = wordme.length;
        // console.log(si)
        for(var i=0;i<370099;i++)
        {
          addtodic(wordme[i])
        }
      }
    function dis(arr)
      {
        console.log(arr)
        if(arr==null){res='No Anagrams Found'}
        else{
        si=arr.length
        res='';
        for(var i=0;i<si;i++)
          {
            // console.log(arr[i])
            res +='<input type = \'button\' id=\''+arr[i]+'\'value=\''+arr[i]+'\' class = \'anagram\' onclick=\'deff('+arr[i]+');\' > <br>'
            // console.log(res)
          }
        }

          document.getElementById('out').innerHTML = res;
      }
      function trim(word)
        {
          trimed=''
          word = word.trim()
          word = word.split(' ');
          for(var i=0;i<word.length;i++)
              if(word[i]!='')trimed+=(word[i]);
          return trimed;
        }
    function inp()
    {

      var word = (document.getElementById('he').value);
      // var word = (document.getElementById('he').elements[0].value);
      word=''.concat(trim(word))
      // console.log(word)
      // console.log(getAnagrams(word)==null)
      dis(getAnagrams(word.toLowerCase()))
      // return document.getElementById('he');

    }
    function deff(drx)
      {
        link = 'https://www.google.com/search?source=hp&ei=QszsWpXMK4P9sQHRv4YY&q='+drx.value+' meaning&oq=boom&gs_l=psy-ab.3..0i67k1l6j0l4.3661.5618.0.5973.11.8.1.0.0.0.302.907.0j1j2j1.4.0....0...1c.1.64.psy-ab..6.5.912.0..46j0i10i67k1j0i10k1j35i39k1j0i131k1j0i46k1.0.uBzqEfNqnQk'
        window.open(link);
      }
      function divide(word)
        {
          len = word.length
          words = []
          function solve(cur,temp)
            {
              if(cur==len)words.push(temp);
              else
              {
                solve(cur+1,temp*map(word[cur]));
                solve(cur+1,temp);
              }
            }
            solve(0,1)
            temp = []

            return words
        }
