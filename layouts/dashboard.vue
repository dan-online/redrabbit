<template>
    <div class="drawer lg:drawer-open">
        <input id="drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <DashboardNavbar />
        </div>
        <div class="drawer-side drawer-overlay">
            <label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <DashboardSidebar />
            <DashboardContent />
        </div>
    </div>
</template>