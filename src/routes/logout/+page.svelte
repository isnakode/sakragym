<script>
  import { goto } from "$app/navigation";
  import { infoLogin } from "../../state/infoLogin";

  infoLogin.deleteInfo();
  goto("/login");
</script>
