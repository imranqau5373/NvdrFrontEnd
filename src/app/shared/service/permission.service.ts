import { Injectable } from '@angular/core';
import { AuthenticationService } from '@core/service/authenticationService';

export class Permissions {
    static readonly AdminDashboard_View = 'Permissions.AdminDashboard.View';
    static readonly SuperAdminDashboard_View = 'Permissions.SuperAdminDashboard.View';
    static readonly BookingUserDashboard_View = 'Permissions.BookingUserDashboard.View';
    
    static readonly SportsManager_View = 'Permissions.SportsManager.View';
    static readonly CourtsManager_View = 'Permissions.CourtsManager.View';
    static readonly CourtsDuration_View = 'Permissions.CourtsDurationManager.View';
    static readonly CourtsBooking_View = 'Permissions.CourtsBookingManager.View';
    static readonly AdminUsers_View = 'Permissions.AdminUsers.View';
    static readonly SuperAdminUsers_View = 'Permissions.SuperAdminUsers.View';
    static readonly MyBookings_View = 'Permissions.MyBookingsManager.View';
}

@Injectable({
    providedIn: 'root'
})
export class PermissionService {
    constructor(
        private authenticationService: AuthenticationService
    ) { }

    //method to check that user has permission or not
    hasPermission(permissionName: string) {
        if (!permissionName)
            return false;
        const permissions = this.authenticationService.getUserPermissions();
        if(!permissions)
            return false;
        let allowd = permissions.find(t => t.value.toLowerCase().trim() == permissionName.toLowerCase().trim());
        if (allowd)
            return true;
        else
            return false;
    }
}