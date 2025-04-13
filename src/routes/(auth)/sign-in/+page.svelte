<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { toast } from 'svelte-french-toast';
	import LOGO from '$lib/images/logo.png';
	import { enhance } from '$app/forms';

	let { data, form } = $props<{ data: PageData; form: ActionData | null }>();
	
	// Form state variables
	let loading = $state(false);
	let username = $state('');
	let password = $state('');
	let rememberMe = $state(false);
	
	// Watch for form submission results
	$effect(() => {
		if (form) {
			if (form.success) {
				toast.success('Successfully logged in!', {
					position: 'top-right',
					duration: 3000,
					style: 'border-radius: 10px; background: #48BB78; color: white;'
				});
				
				// In a real app, you might want to redirect here
				// window.location.href = '/dashboard';
			} else if (form.error) {
				toast.error(form.error, {
					position: 'top-right',
					duration: 5000,
					style: 'border-radius: 10px; background: #F56565; color: white;'
				});
			}
		}
	});
</script>

<main>
	<div class="container">
		<section
			class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
		>
			<div class="container">
				<div class="row justify-content-center">
					<div
						class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
					>
						<div class="card mb-3">
							<div class="card-body">
								<div class="pt-4 pb-2">
									<h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
									<p class="text-center small">Enter your username & password to login</p>
								</div>

								<form 
									class="row g-3 needs-validation" 
									method="POST" 
									use:enhance={() => {
										loading = true;
										
										return async ({ update }) => {
											await update();
											loading = false;
										};
									}}
									novalidate
								>
									<div class="col-12">
										<label for="yourUsername" class="form-label">Username</label>
										<div class="input-group has-validation">
											<span class="input-group-text" id="inputGroupPrepend">@</span>
											<input
												type="text"
												name="username"
												class="form-control"
												id="yourUsername"
												bind:value={username}
												required
												disabled={loading}
											/>
											<div class="invalid-feedback">Please enter your username.</div>
										</div>
									</div>

									<div class="col-12">
										<label for="yourPassword" class="form-label">Password</label>
										<input
											type="password"
											name="password"
											class="form-control"
											id="yourPassword"
											bind:value={password}
											required
											disabled={loading}
										/>
										<div class="invalid-feedback">Please enter your password!</div>
									</div>

									<div class="col-12">
										<div class="form-check">
											<input
												class="form-check-input"
												type="checkbox"
												name="remember"
												value="true"
												id="rememberMe"
												bind:checked={rememberMe}
												disabled={loading}
											/>
											<label class="form-check-label" for="rememberMe">Remember me</label>
										</div>
									</div>
									<div class="col-12">
										<button class="btn btn-primary w-100" type="submit" disabled={loading}>
											{#if loading}
												<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
												Logging in...
											{:else}
												Login
											{/if}
										</button>
									</div>
									<div class="col-12">
										<p class="small mb-0">
											Don't have account? <a href="/sign-up">Create an account</a>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>
