<aura:application extends="force:slds">
    <div class="c-container">
        <lightning:layout horizontalAlign="space">
            <lightning:layoutItem flexibility="auto" padding="around-small">
                <c:BoatSearchForm />
            </lightning:layoutItem>
            <lightning:layoutItem flexibility="auto" padding="around-small">
                <c:BoatSearchResults />
            </lightning:layoutItem>
        </lightning:layout>
    </div>
</aura:application>