<script>
	import { enhance } from '$app/forms';

    export let data;
</script>



<form action="?/sign" method="POST" use:enhance>
    <div>
      <input 
        name="email" 
        required 
        placeholder="Email">
    </div>

    <div>
      <input 
        name="name" 
        required 
        placeholder="Name">
    </div>

    <div>
      <input 
        name="password" 
        type="password" 
        required 
        placeholder="Password">
    </div>
  
    <div style="text-align:left; font-size:13px; color:#ccc; display:flex; align-items:center; gap: 4px;">
      <label for="terms"> I agree </label>
      <p> to the Terms & Conditions</p>
    </div>


    <button type="submit" class="btn">
        ENTER
    </button>

    <div class="signup">
      <p>
        Have an account?
      </p>
      <a href='/login' style="color:white; text-decoration:none; font-weight:550;"> Sign In</a>
    </div>
  </form>