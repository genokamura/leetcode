use std::collections::HashMap;

struct Solution;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut map: HashMap<char, usize> = HashMap::new();
        let mut max = 0;
        let mut start = 0;
        for (i, c) in s.chars().enumerate() {
            if let Some(&j) = map.get(&c) {
                start = start.max(j + 1);
            }
            max = max.max(i - start + 1);
            map.insert(c, i);
        }
        max as i32
    }
}

fn main() {
    assert_eq!(Solution::length_of_longest_substring("abcabcbb".to_string()), 3);
    assert_eq!(Solution::length_of_longest_substring("bbbbb".to_string()), 1);
    assert_eq!(Solution::length_of_longest_substring("pwwkew".to_string()), 3);
}
