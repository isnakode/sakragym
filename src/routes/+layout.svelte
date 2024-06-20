<script>
  import "../app.css";
  import { infoLogin } from "../state/infoLogin";
  export let data;

  infoLogin.setInfo(data);
</script>

<slot />
