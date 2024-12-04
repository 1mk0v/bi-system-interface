<template>
	<div id="tabs-container">
		<div class="bi-title">
			<svg width="210.676025" height="48.410400" viewBox="0 0 210.676 48.4104" fill="none"
				xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
				<defs>
					<clipPath id="clip784_5">
						<rect id="logo-container" rx="0.000000" width="49.000000" height="47.410454"
							transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
					</clipPath>
					<clipPath id="clip784_9">
						<rect id="name-container" rx="0.000000" width="149.676117" height="16.039328"
							transform="translate(60.500000 16.185547)" fill="white" fill-opacity="0" />
					</clipPath>
					<clipPath id="clip784_4">
						<rect id="site-name-container" rx="0.000000" width="209.676117" height="47.410454"
							transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0" />
					</clipPath>
				</defs>
				<rect id="site-name-container" rx="0.000000" width="209.676117" height="47.410454"
					transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0" />
				<g clip-path="url(#clip784_4)">
					<g clip-path="url(#clip784_5)">
						<path id="path35"
							d="M25 48.41L31.99 10.15C38.66 10.15 40.76 10.86 41.07 13.77C41.07 13.77 45.54 12.14 47.8 8.85C38.99 4.88 30.15 4.71 30.15 4.71L24.99 10.82L25 10.82L19.84 4.7C19.84 4.7 10.99 4.88 2.19 8.85C4.44 12.14 8.92 13.77 8.92 13.77C9.22 10.86 11.32 10.15 17.95 10.15L25 48.41Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path37"
							d="M25 2.94C32.11 2.89 40.26 4.01 48.59 7.54C49.71 5.59 50 4.73 50 4.73C40.88 1.22 32.34 0.03 24.99 0C17.64 0.03 9.11 1.23 0 4.73C0 4.73 0.4 5.79 1.39 7.54C9.73 4.01 17.88 2.89 24.99 2.94L25 2.94Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
					</g>
					<g clip-path="url(#clip784_9)">
						<path id="polyline10"
							d="M181.64 22.42L181.64 32.7L184.93 32.7L184.93 25.86L196.92 25.86L196.92 32.7L200.22 32.7L200.22 22.44L181.64 22.42Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path12"
							d="M184.56 19.1L197.23 19.1C198.99 18.75 200.3 17.2 200.67 15.7L181.13 15.7C181.49 17.2 182.82 18.75 184.56 19.1Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path16"
							d="M171.66 32.71C173.32 32 174.21 30.78 174.55 29.36L159.77 29.36L159.78 15.7L156.47 15.71L156.47 32.71L171.66 32.71Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path20"
							d="M131.83 19.05L143.54 19.05C145.3 18.54 146.78 17.2 147.14 15.71L128.55 15.71L128.55 25.75L143.77 25.75L143.77 29.27L131.83 29.28C129.96 29.81 128.38 31.06 127.59 32.72L128.55 32.7L147.04 32.7L147.04 22.41L131.83 22.41L131.83 19.05Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path24"
							d="M102.95 19.09L115.61 19.09C117.38 18.74 118.69 17.18 119.05 15.68L99.51 15.68C99.87 17.18 101.2 18.74 102.95 19.09Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path26"
							d="M102.95 25.8L115.61 25.8C117.38 25.46 118.69 23.9 119.05 22.4L99.51 22.4C99.87 23.9 101.2 25.46 102.95 25.8Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path28"
							d="M102.95 32.7L115.61 32.7C117.38 32.35 118.69 30.8 119.05 29.3L99.51 29.3C99.87 30.8 101.2 32.35 102.95 32.7Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
						<path id="path32"
							d="M70 15.72C70.38 17.21 71.66 18.73 73.43 19.11L78.76 19.11L79.03 19.21L79.03 32.67L82.36 32.67L82.36 19.21L82.66 19.11L88 19.11C89.78 18.65 91.04 17.21 91.41 15.72L91.41 15.69L70 15.69L70 15.72Z"
							fill="#E82127" fill-opacity="1.000000" fill-rule="nonzero" />
					</g>
				</g>
			</svg>
		</div>
		<div id="tabs-main-container">
			<div class="tabs-content-container">
				<label v-for="tab, index in tabList" :class="['bi-btn-transparent', 'tab-container', { 'choosed-tab': currentTab == tab.id }]"
					:key="index" :for="tab.id">
					<span v-html="tab.svg" style="display: contents;"></span>
					<div>
						{{ tab.value }}
						<input type="radio" name="nav" v-model="currentTab" :id="tab.id" :value="tab.id" :checked="tab.active">
					</div>
				</label>
			</div>
			<div class="tabs-content-container">
				<button class="bi-btn-transparent tab-container" @click="logoutEvent">
					<span style="display: contents;">
						<svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<defs>
								<clipPath id="clip784_43">
									<rect id="nav-option-ico" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
								</clipPath>
							</defs>
							<rect id="nav-option-ico" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
							<g clip-path="url(#clip784_43)">
								<path id="Vector" d="M0.36 9.11C-0.13 9.6 -0.13 10.39 0.36 10.88L5.36 15.88C5.85 16.37 6.64 16.37 7.13 15.88C7.62 15.39 7.62 14.6 7.13 14.11L4.26 11.25L12.49 11.25C13.19 11.25 13.74 10.69 13.74 10C13.74 9.3 13.19 8.75 12.49 8.75L4.26 8.75L7.13 5.88C7.62 5.39 7.62 4.6 7.13 4.11C6.64 3.62 5.85 3.62 5.36 4.11L0.36 9.11L0.36 9.11ZM13.74 16.25C13.05 16.25 12.49 16.8 12.49 17.5C12.49 18.19 13.05 18.75 13.74 18.75L16.24 18.75C18.32 18.75 20 17.07 20 15L20 4.99C20 2.92 18.32 1.24 16.24 1.24L13.74 1.24C13.05 1.24 12.49 1.8 12.49 2.49C12.49 3.19 13.05 3.74 13.74 3.74L16.24 3.74C16.94 3.74 17.5 4.3 17.5 4.99L17.5 15C17.5 15.69 16.94 16.25 16.24 16.25L13.74 16.25Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
							</g>
						</svg>
					</span>
					<span>Log out</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tabList: [
				{
					id: "DashboardTab", value: "Dashboard", active: true, svg: `
					<svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs/>
						<path id="Vector" d="M3 0L6.58 0C8.23 0 9.58 1.34 9.58 3L9.58 6.58C9.58 8.23 8.23 9.58 6.58 9.58L3 9.58C1.34 9.58 0 8.23 0 6.58L0 3C0 1.34 1.34 0 3 0ZM13.41 0L17 0C18.65 0 20 1.34 20 3L20 6.58C20 8.23 18.65 9.58 17 9.58L13.41 9.58C11.76 9.58 10.41 8.23 10.41 6.58L10.41 3C10.41 1.34 11.76 0 13.41 0ZM3 10.41L6.58 10.41C8.23 10.41 9.58 11.76 9.58 13.41L9.58 17C9.58 18.65 8.23 20 6.58 20L3 20C1.34 20 0 18.65 0 17L0 13.41C0 11.76 1.34 10.41 3 10.41ZM13.41 10.41L17 10.41C18.65 10.41 20 11.76 20 13.41L20 17C20 18.65 18.65 20 17 20L13.41 20C11.76 20 10.41 18.65 10.41 17L10.41 13.41C10.41 11.76 11.76 10.41 13.41 10.41Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
					</svg>
					`
				},
				{
					id: "ClientsTab", value: "Clients", active: false,
					svg:`
					<svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<clipPath id="clip784_32">
								<rect id="nav-option-ico" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/>
							</clipPath>
						</defs>
						<rect id="nav-option-ico" rx="0.000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/>
						<g clip-path="url(#clip784_32)">
							<path id="Vector" d="M2.26 1.18L0 5.71L9.28 5.71L9.28 0L4.18 0C3.37 0 2.62 0.45 2.26 1.18ZM10.71 5.71L20 5.71L17.73 1.18C17.37 0.45 16.62 0 15.81 0L10.71 0L10.71 5.71ZM20 7.14L0 7.14L0 17.14C0 18.71 1.28 20 2.85 20L17.14 20C18.71 20 20 18.71 20 17.14L20 7.14Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
						</g>
					</svg>`
				},
				{
					id: "ProductsTab", value: "Products", active: false,
					svg:`
					<svg width="20.000000" height="16.000000" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs/>
						<path id="Vector" d="M4.5 0C5.16 0 5.79 0.26 6.26 0.73C6.73 1.2 7 1.83 7 2.5C7 3.16 6.73 3.79 6.26 4.26C5.79 4.73 5.16 5 4.5 5C3.83 5 3.2 4.73 2.73 4.26C2.26 3.79 2 3.16 2 2.5C2 1.83 2.26 1.2 2.73 0.73C3.2 0.26 3.83 0 4.5 0ZM16 0C16.66 0 17.29 0.26 17.76 0.73C18.23 1.2 18.5 1.83 18.5 2.5C18.5 3.16 18.23 3.79 17.76 4.26C17.29 4.73 16.66 5 16 5C15.33 5 14.7 4.73 14.23 4.26C13.76 3.79 13.5 3.16 13.5 2.5C13.5 1.83 13.76 1.2 14.23 0.73C14.7 0.26 15.33 0 16 0ZM0 9.33C0 7.49 1.49 6 3.33 6L4.66 6C5.16 6 5.63 6.1 6.06 6.3C6.02 6.52 6 6.76 6 7C6 8.19 6.52 9.26 7.35 10C7.35 10 7.34 10 7.33 10L0.66 10C0.3 10 0 9.69 0 9.33ZM12.66 10C12.65 10 12.65 10 12.64 10C13.47 9.26 13.99 8.19 13.99 7C13.99 6.76 13.97 6.53 13.93 6.3C14.36 6.1 14.83 6 15.33 6L16.66 6C18.5 6 20 7.49 20 9.33C20 9.7 19.7 10 19.33 10L12.66 10L12.66 10ZM7 7C7 6.2 7.31 5.44 7.87 4.87C8.44 4.31 9.2 4 10 4C10.79 4 11.55 4.31 12.12 4.87C12.68 5.44 13 6.2 13 7C13 7.79 12.68 8.55 12.12 9.12C11.55 9.68 10.79 10 10 10C9.2 10 8.44 9.68 7.87 9.12C7.31 8.55 7 7.79 7 7ZM4 15.16C4 12.86 5.86 11 8.16 11L11.83 11C14.13 11 16 12.86 16 15.16C16 15.62 15.62 16 15.16 16L4.83 16C4.37 16 3.99 15.62 3.99 15.16L4 15.16Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
					</svg>`
				},
			],
			currentTab: "DashboardTab"
		}
	},
	watch: {
		currentTab: {
			handler() {
				this.$emit('changeTabEvent', this.currentTab)
			}
		}
	},
	methods: {
		logoutEvent() {
			this.$emit('logoutEvent', '')
		}
	},
	name: 'NavigationComponent',
	emits: ['changeTabEvent']
}
</script>


<style scoped>
@import url(/src/assets/styles/index.css);
@import url(/src/assets/styles/title.css);


#tabs-container,
#tabs-main-container,
.tabs-content-container {
	display: flex;
	flex-direction: column;
}

#tabs-container {
	background-color: var(--nav-background);
	padding: 30px;
	gap: 40px;
}

#tabs-main-container {
	justify-content: space-between;
	flex: auto;
}

.tabs-content-container {
	gap: 20px;
}

.tab-container {
	display: flex;
	align-items: center;
	gap: 10px;
}

.choosed-tab {
	background-color: var(--bi-transparent-high);
	box-shadow: none;
	transition: all 0.2s;
}
</style>