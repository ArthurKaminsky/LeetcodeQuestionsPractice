package mediumQuestions;

import java.util.HashMap;
import java.util.Map;

class LongestSubstringWithoutRepeatingCharactersSolution {

    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int i = 0;
        int j = 0;
        int max = 0;
        while(j < s.length()){
            map.put(s.charAt(j), map.getOrDefault(s.charAt(j), 0) + 1);
            if(map.size() == j - i + 1){
                max = Math.max(max, j - i + 1);
                j++;
            }
            else if(map.size() < j - i + 1){
                while(map.size() < j - i + 1){
                    map.put(s.charAt(i), map.get(s.charAt(i)) - 1);
                    if(map.get(s.charAt(i)) == 0) map.remove(s.charAt(i));
                    i++;
                }
                j++;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        LongestSubstringWithoutRepeatingCharactersSolution solution = new LongestSubstringWithoutRepeatingCharactersSolution();
        System.out.println(solution.lengthOfLongestSubstring("abcabcbb"));
    }
}
