/** 
 * @description 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * @param {string[]} strs
 * @return {string} prefix 
 */ 

const strs = [
  'flower', 
  'flow',
  'flight',
]

function main(strs) {
  if (!strs.length) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }
  var prefix = strs[0];
  const length = strs.length;
  for (let i = 1; i < strs.length; i++) {
    prefix = getPrefix(prefix, strs[i])
    if (prefix === '') {
      break;
    }
  }
  return prefix;
}

function getPrefix(str1, str2) {
  const targetStr = str1.length < str2.length ? str1 : str2;
  const length = targetStr.length;
  let prefix = '';
  for(let i = 0 ;i < length; i++) {
    if (str1[i] === str2[i]) {
      prefix += str1[i];
    } else {
      break;
    }
  }
  return prefix;
}

console.log(main(strs))